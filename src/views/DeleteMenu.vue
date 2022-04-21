<template>
 <div class="admin">
    <form method = "POST" action = "/admin/handle-form" class="container container-form ">
    <h2 >Danh sách thức uống đã xóa</h2>
    <div class="d-flex changs-page">
      <a href = "/admin" class = " btn btn-success mr-4">Đi để trở về</a>
      <a href = "/trashMenu " class = " btn btn-success">Các món đã xóa</a>
    </div>

    <div class="form-check mb-4 d-flex align-items-center"  >
        <input type="checkbox" class="form-check-input checkbox-all"  />
        <label class="form-check-label" for="exampleCheck1">Chọn tất cả</label>
        <div class="input-group col-6">
        <select class="custom-select select-action" name = "action" >
            <option >Chọn chức năng</option>
            <option value="Restore">Phục hồi</option>
            <option value="DeleteAll">Xoá</option>
        </select>
        </div>
        <button type="button" class="btn btn-primary btnSubmit " disabled = "disabled">Thực hiện</button>
    </div>
     <table class="table table-hover table-dark">
        <thead>
        <tr>
            <th scope="col">Espresso</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá </th>
            <th scope="col" class = "text-center">Tùy chọn</th>
        </tr>
        </thead>
        <tbody>
        <!-- {{#each cafe}} -->
            <tr>
            <th scope="row"><input type="checkbox" name = "coursesIds[]" value = {{this._id}} class="item-checkbox"  /> {{this._id}}</th>
            <td>{{this.name}}</td>
            <td>{{this.price}}</td>
            <td>
                <a href="" class = "btn btn-link btn-restore" data-id = "{{this._id}}">Khôi phục</a>
                <a data-toggle="modal" class = "btn btn-link" data-id = "{{this._id}}" data-target="#btn-deleted" href="">Xóa vĩnh viễn</a>
            </td>
            </tr>
            <!-- {{else}} -->
                <tr  >
                <td colspan="4" class = "text-center">Túi của bạn (vì nó trống rỗng) <a href="/Courses/create" class="">Quay lại danh sách khóa học</a></td>
                
                </tr>
        <!-- {{/each}} -->
        </tbody>
    </table>
      <table class="table table-hover table-dark">
        <thead>
        <tr>
            <th scope="col">Phindi</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá </th>
            <th scope="col" class = "text-center">Tùy chọn</th>
        </tr>
        </thead>
        <tbody>
        <!-- {{#each phindi}} -->
            <tr>
            <th scope="row"><input type="checkbox" name = "coursesIds[]" value = {{this._id}} class="item-checkbox"  /> {{this._id}}</th>
            <td>{{this.name}}</td>
            <td>{{this.price}}</td>
            <td>
                <a href="" class = "btn btn-link btn-restore" data-id = "{{this._id}}">Khôi phục</a>
                <a data-toggle="modal" class = "btn btn-link" data-id = "{{this._id}}" data-target="#btn-deleted" href="">Xóa vĩnh viễn</a>
            </td>
            </tr>
            <!-- {{else}} -->
                <tr  >
                <td colspan="4" class = "text-center">Túi của bạn (vì nó trống rỗng) <a href="/Courses/create" class="">Quay lại danh sách khóa học</a></td>
                
                </tr>
        <!-- {{/each}} -->
        </tbody>
    </table>
      <table class="table table-hover table-dark">
        <thead>
        <tr>
            <th scope="col">Espresso</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá </th>
            <th scope="col" class = "text-center">Tùy chọn</th>
        </tr>
        </thead>
        <tbody>
        <!-- {{#each espresso}} -->
            <tr>
            <th scope="row"><input type="checkbox" name = "coursesIds[]" value = {{this._id}} class="item-checkbox"  /> {{this._id}}</th>
            <td>{{this.name}}</td>
            <td>{{this.price}}</td>
            <td>
                <a href="" class = "btn btn-link btn-restore" data-id = "{{this._id}}">Khôi phục</a>
                <a data-toggle="modal" class = "btn btn-link" data-id = "{{this._id}}" data-target="#btn-deleted" href="">Xóa vĩnh viễn</a>
            </td>
            </tr>
            <!-- {{else}} -->
                <tr  >
                <td colspan="4" class = "text-center">Túi của bạn (vì nó trống rỗng) <a href="/Courses/create" class="">Quay lại danh sách khóa học</a></td>
                
                </tr>
        <!-- {{/each}} -->
        </tbody>
    </table>
    
    </form>

</div>
</template>
<script>
import { swtoast, swalert } from "@/mixins/swal.mixin";
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async getContact(id) {
      try {
        this.contact = await ContactService.get(id);
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: { pathMatch: this.$route.path.split("/").slice(1) },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },

    async updateContact(data) {
      try {
        await ContactService.update(this.contact._id, data);
        swtoast.success({
          text: "Liên hệ được cập nhật thành công.",
        });
      } catch (error) {
        console.log(error);
        swtoast.error({
          text: "Đã có lỗi xảy ra.",
        });
      }
    },

    async deleteContact() {
      swalert
        .fire({
          title: "Xóa Liên hệ",
          icon: "warning",
          text: "Bạn muốn xóa Liên hệ này?",
          showCloseButton: true,
          showCancelButton: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await ContactService.delete(this.contact._id);
              swtoast.success({
                text: "Liên hệ được xóa thành công.",
              });
              this.$router.push({ name: "contactbook" });
            } catch (error) {
              console.log(error);
              swtoast.error({
                text: "Đã có lỗi xảy ra.",
              });
            }
          }
        });
    },
  },
  created() {
    this.getContact(this.id);
  },
};
</script>

<style>
.admin {
  background-color: #fbedd7;
  padding-top: 40px;
}
.changs-page {
  padding: 12px 0px;
}
</style>
