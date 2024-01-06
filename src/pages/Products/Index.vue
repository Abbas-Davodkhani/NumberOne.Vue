<template>
    <div class="container mt-5">
        <div class="row g-3">
            <div class="">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="pro in products" v-bind:key="pro.id">
                        <ProductCard :product="pro" />
                    </tr>
                    </tbody>
                </table>
              
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { ref } from "vue";
import ProductCard from "@/components/Products/ProductCard.vue";

export default {
    components: {
        ProductCard
    },
    setup() {


        const products = ref([]);


        function getUsers() {
            axios.get("https://stoplight.io/mocks/spark-solutions/api-v2/3124960/api/v2/storefront/products")
                .then(function (response) {
                    products.value = response.data.data;
                    console.log(products.value);
                });
        }
        getUsers();



        return { products };
    }
}
</script>




<style></style>