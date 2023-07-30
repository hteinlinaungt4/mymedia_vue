import axios from "axios";
export default {
    name : "PostDetailView", 
    data () {
        return {
            postdetailid: '',
            detailpost : '',
            count : '',
        }
    },
    methods: {
        filter(id) {
            let data ={
                'key' : id,
            }
            axios.post("http://127.0.0.1:8000/api/filter/post",data).then((response)=>{
                if(response.data.post.image == null){
                    response.data.post.image = "http://localhost:8000/storage/404.png";
                }else{
                    response.data.post.image = "http://localhost:8000/storage/"+response.data.post.image;
                }
                this.detailpost=response.data.post         
            });
        },
        back(){
            history.back();
        },
        viewcount(){
            let data ={
                'id' : this.$route.params.id,
            }
            axios.post("http://127.0.0.1:8000/api/post/viewcount",data).then((response)=>{
                    this.count = response.data.count;
            });
        } 

    },
    mounted () {
        this.viewcount();
        this.postdetailid=this.$route.params.id;    
        this.filter(this.postdetailid);    
    }
 }