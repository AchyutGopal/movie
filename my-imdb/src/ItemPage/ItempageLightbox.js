import React from 'react'

function ItempageLightbox() {
    return (
        <div>
   
   <div>
    <button class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-usage">Toggle</button>
    <p id="toggle-usage">What's up?</p>
</div>


<section class="uk-cover-container overlay-wrap">
			<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://picsum.photos/640/650/?image=770 640w,
			https://picsum.photos/960/650/?image=770 960w,
			https://picsum.photos/1200/650/?image=770 1200w,
			https://picsum.photos/2000/650/?image=770 2000w"
			data-sizes="100vw"
			data-src="https://picsum.photos/1200/650/?image=770" alt="" data-uk-cover data-uk-img
			/>
			<div class="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge uk-light">
				<div class="uk-grid uk-flex-right">
					
					<div class="uk-width-2-5@m" data-uk-parallax="y: 50,-50; easing: 0; media:@l">
						<h6>TESTIMONIALS</h6>
						<div class="uk-position-relative uk-visible-toggle uk-light" data-uk-slider="easing: cubic-bezier(.16,.75,.47,1)">
							<ul class="uk-slider-items uk-child-width-1-1">
								<li>
									<div data-uk-slider-parallax="opacity: 0.2,1,0.2">
										<h2 class="uk-margin-small-top">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
										<p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
									</div>
								</li>
								<li>
									<div data-uk-slider-parallax="opacity: 0.2,1,0.2">
										<h2 class="uk-margin-small-top">"Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
										<p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
									</div>
								</li>
								<li>
									<div data-uk-slider-parallax="opacity: 0.2,1,0.2">
										<h2 class="uk-margin-small-top">"Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
										<p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
									</div>
								</li>
							</ul>
							<ul class="uk-slider-nav uk-dotnav uk-margin-top"><li></li></ul>
							
						</div>
					</div>
					
				</div>
			</div>
</section>
        </div>
    )
}

export default ItempageLightbox
