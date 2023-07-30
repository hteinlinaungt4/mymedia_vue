<template>
    <div>

        <!-- About US Start -->
        <div class="about-area">
            <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                <strong>Trending now</strong>
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="detailpost.image" alt="">
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3>{{  detailpost.title }} </h3>
                                    <i class="fa-solid fa-eye"></i><span class="mx-2">{{  count }}</span>
                                </div>
                                <p>{{ detailpost.description }}</p>
                                 
                            </div>
                            <!-- From -->
                           
                            <button type="submit" class="button button-contactForm boxed-btn my-5 float-right" @click="back()">Back</button>
                        </div>
                   </div>
            </div>
        </div>
        <!-- About US End -->
        
    </div>
</template>

<script src="../js/PostDetailView.js"></script>

