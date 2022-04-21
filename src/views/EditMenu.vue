<template>
  <div class="mt-4 mb-4 body-page">
    <div class="container">
      <form method="POST" action="/admin/{{value._id}}?_method=PUT">
        <h2>Chỉnh thức</h2>
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
          <label for="videoID" class="form-label">Ảnh sản phẩm</label>
          <input
            type="text"
            class="form-control"
            value="{{value.img}}"
            id="videoID"
            name="videoID"
          />
        </div>
        <button type="submit" class="btn btn-primary">Update Sản phẩm</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
  computed: {
    ...mapState(useAuthStore, {
      currentUser: "user",
    }),
  },
  created() {
    if (!this.currentUser) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
<style>
.body-page {
  min-height: calc(100vh - 264px);
}
</style>
