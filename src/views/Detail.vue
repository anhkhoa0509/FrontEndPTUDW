<template>
<div class="container-all">
    <div class="container page-cafe">
    <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">CÀ PHÊ PHIN</h1>
        <p class="page-cafe-all">Việt Nam tự hào sở hữu một di sản văn hóa cà phê
        giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã
        ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất
        chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là
        'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân
        thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống
        nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự
        hào phục vụ cà phê Việt theo cách truyền thống của người Việt.</p>
        <div class = "col-sm-12 cafe-item-all">
            <div class="btn-handle">
                <button type="button" class = " btn-next" id="goToPrevSlide"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class = "btn-next" id="goToNextSlide"><i class="fas fa-chevron-right"></i></button>
            </div>
        <ul id="product-cafe" >
            <!-- {{#each cafe}} -->
            <li>
            <div class="cafe-item" method="POST" action="">
                    <img class="cafe-item-img-top" src="{{this.img}}" alt="Card image cap">
                    <div class="cafe-item-body">
                        <h5 class="cafe-item-title">{{this.name}}</h5>
                        <p class="cafe-item-text">Giá : <span class = "cafe-item-price">{{this.price}} VNĐ</span></p>
                         <button data-toggle="modal" class="btn btn-primary btn-add-item" data-id = "{{this._id}}" data-target = "#add-item-price" data-img = "{{this.img}}" data-price = "{{this.price}}" data-name = "{{this.name}}">ĐẶT MUA NGAY</button> 
                    </div>
                </div>
            </li>
            <!-- {{else}} -->
            <li>Tất cả đều trong giỏ của bạn</li>
            <!-- {{/each}} -->
        
        </ul>  
        </div>
    </div>
    <div class="container cart col-lg-4">
        <div class="col-lg-12 cart-left mt-4">
            <p class="cart-left-header">
            Danh sách các món
        </p>
       
        <div class="cart-left-body">
            <ul class="cart-body-items">
              
            </ul>
            <div class="submit-buy ">
                <p class = "sum-cart">TỔNG: 0</p>
                <div class="">

                <button data-toggle="modal" class="btn btn-primary btn-add-item" data-id = "{{this._id}}" data-target = "#submit-buy" data-img = "{{this.img}}" data-price = "{{this.price}}" data-name = "{{this.name}}">ĐẶT MUA NGAY</button> 
                </div>
            </div>

        </div>

        
       
    </div>
</div>
    </div>
    <div class="container page-phindi">
    <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">PHINDI - CÀ PHÊ PHIN THẾ HỆ MỚI</h1>
        <p class="page-cafe-all">Một thế hệ Cà Phê Phin Việt Nam hoàn toàn mới, phục vụ cho thế hệ trẻ đầy nhiệt huyết, độc lập và sáng tạo. Vẫn mang trong mình tinh tuý chắt lọc từ Cà Phê Phin Việt Nam nhưng êm chất Phin, kết hợp độc đáo cùng những vị ngon từ Kem Sữa - Hạnh Nhân - Choco. PhinDi, Cà Phê Phin Thế Hệ Mới - Chất Phin Êm, Ngon Tròn Vị!</p>
        <div class = "col-sm-12 cafe-item-all">
            <div class="btn-handle">
                <button type="button" class = " btn-next" id="goToPrevSlide2"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class = "btn-next" id="goToNextSlide2"><i class="fas fa-chevron-right"></i></button>
            </div>
        <ul id="product-phindi" >
            <!-- {{#each phindi}} -->
            <li>
            <div class="cafe-item" method="POST" action="">
                    <img class="cafe-item-img-top" src="{{this.img}}" alt="Card image cap">
                    <div class="cafe-item-body">
                        <h5 class="cafe-item-title">{{this.name}}</h5>
                        <p class="cafe-item-text">Giá : <span class = "cafe-item-price">{{this.price}} VNĐ</span></p>
                         <button data-toggle="modal" class="btn btn-primary btn-add-item" data-id = "{{this._id}}" data-target = "#add-item-price" data-img = "{{this.img}}" data-price = "{{this.price}}" data-name = "{{this.name}}">ĐẶT MUA NGAY</button> 

                    </div>
                </div>
            </li>
            <!-- {{/each}} -->
            
        </ul>  
        </div>
    </div>
    </div>
    <div class="container page-espresso">
        <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">Cà Phê Espresso</h1>
        <p class="page-cafe-all">Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.</p>
        <div class = "col-sm-12 cafe-item-all">
        <div class="btn-handle">
             <button type="button" class = " btn-next" id="goToPrevSlide3"><i class="fas fa-chevron-left"></i></button>
                <button type="button" class = "btn-next" id="goToNextSlide3"><i class="fas fa-chevron-right"></i></button>
        </div>
      <ul id="product-espresso" >
          <!-- {{#each espresso}} -->
        <li>
           <div class="cafe-item" method="POST" action="">
                <img class="cafe-item-img-top" value = "{{this.img}}" src="{{this.img}}" alt="Card image cap">
                <div class="cafe-item-body">
                    <h5 class="cafe-item-title" value = "{{this.name}}" >{{this.name}}</h5>
                    <p class="cafe-item-text" value = "{{this.price}}">Giá : <span class = "cafe-item-price">{{this.price}} VNĐ</span></p>
                    <button data-toggle="modal" class="btn btn-primary btn-add-item" data-id = "{{this._id}}" data-target = "#add-item-price" data-img = "{{this.img}}" data-price = "{{this.price}}" data-name = "{{this.name}}">ĐẶT MUA NGAY</button> 
                </div>
                 
            </div>
        </li>
         <!-- {{/each}} -->
         
      </ul>  

    </div>
  </div>
        <div class="modal fade" id="add-item-price" tabindex="-1" role="dialog" aria-labelledby="btn-add-item" aria-hidden="true">
             <div class="modal-dialog" role="document">
             <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Thông cmn báo</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                               Bạn đã thêm 1 sản phẩm vào giỏ hàng!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Bấm lộn</button>
                                <button type="button" class="btn btn-primary btn-add-value" data-dismiss="modal">!Bấm lộn</button>
                            </div>
                            </div>
                        </div>
                    </div>
         <div class="modal fade" id="submit-buy" tabindex="-1" role="dialog" aria-labelledby="btn-add-item" aria-hidden="true">
             <div class="modal-dialog" role="document">
             <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Tiểu nhị, tính tiền</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                               Quý khác có thể chọn 1 trong 2 phương thức thanh toán sau : 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Bằng 1 cú đấm</button>
                                <button type="button" class="btn btn-primary btn-add-value" data-dismiss="modal">Bằng 1 nụ cười(khuyến khích)</button>
                            </div>
                            </div>
                        </div>
                    </div>

    </div>
</div>
    <!-- Button trigger modal -->




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
    .modal-open{overflow:auto;padding-right:0 !important;}
    body:not(.modal-open){
    padding-right: 0px !important;
    }
    .container-all{
        background: #fbedd7;
        padding:0 !important;
    }
    .page-cafe,
    .page-phindi,
    .page-freeze,
    .page-espresso{
        padding-top: 24px;
        color:#53382c;
        display: flex;
        flex-wrap: wrap;
    }
    .product-cafe{
        height:100%;
    }
    .page-cafe-header{
        font-size: 45px;
        font-weight:700;
    }
    .page-cafe-body{
        font-size:16px;
        text-align: justify;
    }
    .cafe-item{
        width:236px;
        padding-bottom: 24px;
    }
    .cafe-item-img-top{
        height:187px;
        width: 187px;
        margin-left: 24px;
        border: 1px solid #8a746a;
    }   
    .cafe-item-body{
        padding-top:12px;
         text-align:center;
    }
    .cafe-item-title{
        font-size:18px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .cafe-item-text{
        font-size:14px;
     }
     .cafe-item-price{
        font-weight: 700;
     }
     .btn-handle{
         display: flex;
        justify-content: flex-end;
        padding: 24px;
     }
     .btn-next{
         border:0;
         padding: 0px 12px;
         margin-left: 16px;
         background:#b22830;
     }
     .cafe-item-all{
         border-bottom: 1px solid #8a746a;
     }
      .btn-add-item{
        width: 146px;
        height: 45px;
        font-size: 14px; 
        background:#fbedd7;
        color:#53382c;
        border:1px solid #53382c;
      }
      .btn-add-item:hover{
          background:#882106;
      }
          
     .page-cafe-all{
         font-size:18px;
     }
   
    
    .cart{  
        width:100%;
    }
     .cart-left{
        border:3px solid #53382c;
        background:white;
        padding:0px;
    }
    .cart-left-header{
       font-size: 24px;
       font-weight: 700;
       color: #53382c;
       text-align: center;
       padding: 6px 0px;
       border-bottom: 1px solid #53382c;
       margin-bottom: 0;
    }
    
    .cart-body-items{
        list-style: none;
        padding:0;
        max-height: 500px;
        overflow-y: auto;
    }
    .cart-body-items::-webkit-scrollbar{
        display: none;
    }
    .cart-body-item{
        width:100%;
        display: flex;
        background-color:#ccc;
        margin-bottom:12px;
        height:100px;
    }
    .cart-body-item-img{
        padding:0;
    }
    .cart-body-item-main{
        margin: auto;
    }
    .body-item-main_name{
        font-size:18px;
        font-weight: 700;
        color:#53382c;
        padding-top:12px;
        margin-bottom:12px;
    }
    .body-item-main_price{
        font-size:14px;
      padding-left:12px;
    }
    .cart-body-item-handle{
        margin:auto;
        padding:12px 0px 0px 0px;
    }
    .cart-body-item-handle_body{
        display:flex;
        height:30px;
    }
    .body-item-handle_icon{
        padding: 6px;
        background-color: white;
        font-size: 12px;
        border-radius: 24px;
        color: #53382c;
    }
    .value-number {
        font-size: 16px;
        padding: 0 6px;
    }
     .cart-body-item-handle_text {
         text-align: center;
         padding: 12px 12px 0px 0px;
     }
     .sum-cart{
         font-size:18px;
         font-weight: 700;
         color: #53382c;
         margin: 0;
         padding:6px 12px;
     }
    .modal {
        padding-right: 0px !important;
    }
    .submit-buy{
        border-top: 3px solid #53382c;
        display: flex;
        justify-content:space-between;
    }

     @media (max-width:767px){
        
         .page-cafe{
                flex-direction: column-reverse;
         }
         .cart-body-item-img{
             width:100px;
         }
         .cart-body-item-main{
             padding:0;
         }
         .cart-body-item-handle_body{
             padding-left: 20px;
         }
         .page-cafe-all{
             font-size: 16px;
         }
         .cafe-item-all{
             padding:0;
         }
        #product-phindi{
            height:300px;
        }
        .page-cafe{
             padding: 24px 0px 40px 0px;
        }

        .btn-handle{
            padding-right: 0;
        }
         .cafe-item{
            height:247px;
            width: 165px;
            padding:0;
        }
        .cafe-item-img-top{
            height:132px;
            width: 132px;
            margin-left: 24px;
            border: 1px solid #8a746a;
        }   
        .btn-add-item{
            height: 36px;
            font-size: 10px;
            font-weight: 600;
            width: 140px;
            margin-bottom: 3px;
        }
        .cafe-item-text{
            margin:0;
        }
     }
</style>