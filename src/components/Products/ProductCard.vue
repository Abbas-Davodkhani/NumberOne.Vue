<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">

            <p class="card-text">{{product.attributes.description}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> Name {{  product.attributes.name }} </li>
            <li class="list-group-item"> Slug {{  product.attributes.slug }}</li>
            <li class="list-group-item"> Sku {{  product.attributes.sku }}</li>
        </ul>

    </div>
</template>
<script>

export default {
    props: {
        product: Object
    }
}
</script>
<style></style>