<template>
  <div class="admin container body-view ">
    <form
      method="POST"
      action="/admin/handle-form"
      class="col-12 container-form"
    >
      <h2 class="admin-header_text">Danh sách thức uống có trong Menu</h2>
      <div class="d-flex changs-page">
        <a href="/add" class="btn btn-success mr-4">Thêm thức uống</a>
        <a href="/delete" class="btn btn-success">Các món đã xóa</a>
      </div>

      <div class="form-check mb-4 d-flex align-items-center">
        <input type="checkbox" class="form-check-input checkbox-all" />
        <label class="form-check-label" for="exampleCheck1">Chọn tất cả</label>
        <div class="input-group col-6">
          <select class="custom-select select-action" name="action">
            <option>Chọn chức năng</option>
            <option value="DeleteAll">Xoá</option>
          </select>
        </div>
        <button
          type="button"
          class="btn btn-primary btnSubmit"
          disabled="disabled"
        >
          Thực hiện
        </button>
      </div>
      <table class="table table-hover table-dark col-sm-12">
        <thead>
          <tr>
            <th scope="col">Espresso</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>
        <!-- <tbody>
            {{#each cafe}}
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name="coursesIds[]"
                  value="{{this._id}}"
                  class="item-checkbox"
                />
                {{ this._id }}
              </th>
              <td>{{ this.name }}</td>
              <td>{{ this.price }}</td>
              <td>
                <a
                  href="/edit"
                  class="btn btn-link btn-restore"
                  data-id="{{this._id}}"
                  >Chỉnh sửa</a
                >
                <a
                  data-toggle="modal"
                  class="btn btn-link"
                  data-id="{{this._id}}"
                  data-target="#btn-deleted"
                  href=""
                  >Xóa vĩnh viễn</a
                >
              </td>
            </tr>
            {{else}}
            <tr>
              <td colspan="4" class="text-center">
                Túi của bạn (vì nó trống rỗng)
                <a href="/Courses/create" class=""
                  >Quay lại danh sách khóa học</a
                >
              </td>
            </tr>
            {{/each}}
          </tbody> -->
      </table>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Phindi</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>
        <!-- <tbody>
          {{#each phindi}}
          <tr>
            <th scope="row">
              <input
                type="checkbox"
                name="coursesIds[]"
                value="{{this._id}}"
                class="item-checkbox"
              />
              <p>{{ this._id }}</p>
            </th>
            <td>{{ this.name }}</td>
            <td>{{ this.price }}</td>
            <td>
              <a
                href="/edit"
                class="btn btn-link btn-restore"
                data-id="{{this._id}}"
                >Chỉnh sửa</a
              >
              <a
                data-toggle="modal"
                class="btn btn-link"
                data-id="{{this._id}}"
                data-target="#btn-deleted"
                href=""
                >Xóa vĩnh viễn</a
              >
            </td>
          </tr>
          {{else}}
          <tr>
            <td colspan="4" class="text-center">
              Túi của bạn (vì nó trống rỗng)
              <a href="/Courses/create" class="">Quay lại danh sách khóa học</a>
            </td>
          </tr>
          {{/each}}
        </tbody> -->
      </table>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Espresso</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>
        <!-- <tbody>
          {{#each espresso}}
          <tr>
            <th scope="row">
              <input
                type="checkbox"
                name="coursesIds[]"
                value="{{this._id}}"
                class="item-checkbox"
              />
              {{ this._id }}
            </th>
            <td>{{ this.name }}</td>
            <td>{{ this.price }}</td>
            <td>
              <a
                href="/edit"
                class="btn btn-link btn-restore"
                data-id="{{this._id}}"
                >Chỉnh sửa</a
              >
              <a
                data-toggle="modal"
                class="btn btn-link"
                data-id="{{this._id}}"
                data-target="#btn-deleted"
                href=""
                >Xóa vĩnh viễn</a
              >
            </td>
          </tr>
          {{else}}
          <tr>
            <td colspan="4" class="text-center">
              Túi của bạn (vì nó trống rỗng)
              <a href="/Courses/create" class="">Quay lại danh sách khóa học</a>
            </td>
          </tr>
          {{/each}}
        </tbody> -->
      </table>
    </form>
  </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  methods: {
    async saveContact(data) {
      try {
        await ContactService.create(data);
        swtoast.success({
          text: "Liên hệ được thêm thành công.",
        });
      } catch (error) {
        console.log(error);
        swtoast.error({
          text: "Đã có lỗi xảy ra.",
        });
      }
    },
  },
};
</script>
<style>
.body-view {
  min-height: calc(100vh - 189px);
}
</style>