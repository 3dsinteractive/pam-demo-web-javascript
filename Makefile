.PHONY: build-ecommerce
build-ecommerce:
	./docker-build.sh ecommerce-1.0 e-commerce/
.PHONY: build-insurance
build-insurance:
	./docker-build.sh insurance-1.0 insurance/
.PHONY: build-house
build-house:
	./docker-build.sh house-1.0 house/
