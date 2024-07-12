# rappel du modèle
from django.contrib.auth.models import Group, User
from rest_framework import serializers
from models import Furniture

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class FurnitureSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Furniture
        fields = ['id', 'name', 'price', 'size', 'color', 'material', 'disponibility', 'pictureOne', 'pictureTwo', 'pictureThree', 'type_id']
        
''' class FurnituresSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=False, allow_blank=True, max_length=100)
    price = serializers.DecimalField(max_digits = 10, decimal_places = 2)
    size = serializers.CharField(max_length = 255)
    color = serializers.CharField(max_length = 100)
    material = serializers.CharField(max_length = 255)
    disponibility = serializers.CharField(max_length = 100)
    pictureOne = serializers.BinaryField(blank = False, null = False)
    pictureTwo = serializers.BinaryField(blank = False, null = False)
    pictureThree = serializers.BinaryField(blank = False, null = False)
    type_id = serializers.ForeignKey('types', on_delete=serializers.CASCADE)

    def create(self, validated_data):
        """
        Create and return a new `Furniture` instance, given the validated data.
        """
        return Furniture.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Furniture` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.size = validated_data.get('size', instance.size)
        instance.color = validated_data.get('color', instance.color)
        instance.material = validated_data.get('material', instance.material)
        instance.disponibility = validated_data.get('disponibility', instance.disponibility)
        instance.pictureOne = validated_data.get('pictureOne', instance.pictureOne)
        instance.pictureTwo = validated_data.get('pictureTwo', instance.pictureTwo)
        instance.pictureThree = validated_data.get('pictureThree', instance.pictureThree)
        instance.type_id = validated_data.get('type_id', instance.type_id)
        
        # instance.linenos = validated_data.get('linenos', instance.linenos)
        # instance.language = validated_data.get('language', instance.language)
        # instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance

        '''