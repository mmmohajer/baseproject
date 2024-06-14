from django.conf import settings
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Payment
from .serializers import PaymentSerializer
import paypalrestsdk

paypalrestsdk.configure({
    "mode": settings.PAYPAL_MODE,
    "client_id": settings.PAYPAL_CLIENT_ID,
    "client_secret": settings.PAYPAL_CLIENT_SECRET
})

@api_view(['POST'])
def create_payment(request):
    amount = request.data.get('amount')
    currency = request.data.get('currency', 'USD')
    
    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "amount": {
                "total": amount,
                "currency": currency
            },
            "description": "Payment description"
        }],
        "redirect_urls": {
            "return_url": "http://localhost:3000/payment/execute",
            "cancel_url": "http://localhost:3000/payment/cancel"
        }
    })

    if payment.create():
        payment_record = Payment.objects.create(
            payment_id=payment.id,
            amount=amount,
            currency=currency,
            status='created'
        )
        for link in payment.links:
            if link.rel == "approval_url":
                approval_url = link.href
                return JsonResponse({'approval_url': approval_url})
    else:
        return JsonResponse({'error': payment.error}, status=500)

@api_view(['GET'])
def execute_payment(request):
    payment_id = request.GET.get('paymentId')
    payer_id = request.GET.get('PayerID')

    payment = paypalrestsdk.Payment.find(payment_id)

    if payment.execute({"payer_id": payer_id}):
        payment_record = Payment.objects.get(payment_id=payment_id)
        payment_record.payer_id = payer_id
        payment_record.status = 'executed'
        payment_record.save()
        return JsonResponse({'status': 'Payment executed successfully'})
    else:
        return JsonResponse({'error': payment.error}, status=500)