from django.shortcuts import render
from .models import Flower
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .serializers import  FlowerSerializer


@csrf_exempt
def flower_list(request):
    if request.method == "GET":
        products = Flower.objects.all()
        ser = FlowerSerializer(products, many=True)
        return JsonResponse(ser.data, safe=False)
    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = FlowerSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
        return JsonResponse(ser.errors, status=400)


