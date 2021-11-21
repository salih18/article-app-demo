from django.core.exceptions import ValidationError

def validate_image(image):
    # 2MB
    megabyte_limit = 2.0
    print(image.name)
    if image.size > megabyte_limit*1024*1024:
        print(image.size)
        raise ValidationError("Max file size is %sMB" % str(megabyte_limit))
