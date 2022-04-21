<template>
  <div class="mt-4 mb-4">
    <div class="container">
      <div>
        <h2>Thêm thức uống</h2>
        <div class="form-check mb-4 d-flex align-items-center">
          <label class="form-check-label" for="exampleCheck1">Chọn loại</label>
          <div class="input-group col-6">
            <select class="custom-select select-action" name="action">
              <option>Chọn mục</option>
              <option value="cafe">Cà phê</option>
              <option value="phindi">Phindi</option>
              <option value="espresso">Espresso</option>
            </select>
          </div>
          <a href="/admin" type="button" class="btn btn-primary btnSubmit"
            >Quay lại</a
          >
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Tên thức uống</label
          >
          <input
            type="text"
            class="form-control"
            value="{{value.name}}"
            id="name"
            name="name"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Giá </label>
          <input
            class="form-control"
            id="price"
            name="price"
            value="{{value.price}}"
          />
        </div>
        <div class="mb-3">
          <label for="img" class="form-label">Ảnh sản phẩm</label>
          <input
            type="text"
            class="form-control"
            value="{{value.img}}"
            id="img"
            name="img"
          />
        </div>
        <button @click="hello()" class="btn btn-primary">
          Update thức uống
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  methods: {
    async hello() {
      let repons = await axios.get("http://localhost:3000/login");
      console.log("repons", repons);
    },
  },
};
</script>
