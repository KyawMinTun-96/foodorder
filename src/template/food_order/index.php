<?php 
    include_once "views/top.php"; 
    include_once "views/navbar.php";
    include_once "views/slider.php";
?>




<!-----------Order------------->
<div class="container order">
    <?php include_once "views/navtab.php";?>
    <div class="row my-5">
        <div class="col-md-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_title_font active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="bi bi-calendar2-week-fill mr-2 cu_icon"></i>Book Now</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_title_font " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="bi bi-truck mr-2 cu_icon"></i>Delivery</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_title_font" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <div class="row">
                                <p class="display-4 cu_title_font">Choose Booking Hour</p>
                            </div>
                            <form action="#" method="get" class="my-2">
                                <div class="row">
                                    <div class="col-md-4 form-group">
                                        <label for="adult" class="cu_lb_font">Party Size</label>
                                        <select class="form-control cu_p_font" id="adult">
                                            <option value="1">1&nbsp;Adult</option>
                                            <option value="2" selected>2&nbsp;Adults</option>
                                            <option value="3">3&nbsp;Adults</option>
                                            <option value="4">4&nbsp;Adults</option>
                                            <option value="5">5&nbsp;Adults</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="child" class="cu_lb_font">Child</label>
                                        <select class="form-control" id="child">
                                            <option value="0" selected>None</option>
                                            <option value="1">1&nbsp;kid</option>
                                            <option value="2">2&nbsp;kids</option>
                                            <option value="3">3&nbsp;kids</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="date" class="cu_lb_font">Dining Date</label>
                                        <select type class="form-control" id="date">
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo? Ipsa, officia, aut nemo repellat placeat, perferendis in odio qui et natus vel dolorem! Libero tenetur exercitationem inventore dignissimos odit.lorem</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo? Ipsa, officia, aut nemo repellat placeat, perferendis in odio qui et natus vel dolorem! Libero tenetur exercitationem inventore dignissimos odit.lorem</p>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo? Ipsa, officia, aut nemo repellat placeat, perferendis in odio qui et natus vel dolorem! Libero tenetur exercitationem inventore dignissimos odit.lorem</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo? Ipsa, officia, aut nemo repellat placeat, perferendis in odio qui et natus vel dolorem! Libero tenetur exercitationem inventore dignissimos odit.lorem</p>
                </div>
            </div>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_p_font active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_p_font " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Brunch</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_p_font " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lunch</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_p_font" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tea</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link cu_p_font " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dinner</a>
                </li>
            </ul>
        </div>
    </div>
</div>





<?php include_once"views/base.php"; ?>
    
