import React from 'react'

function GridCard() {
    return (
        <div>
 {/* Ui kit Grid Practice and Understanding */}
 <div class="uk-container uk-container-center uk-background-secondary">
{/* The below is a row -> defined using uk-grid */}
<div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
      {/* Creating Columns */}
      {/* <!-- card --> */}
					<div class="nature-card" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
										<span class="cat-txt">Nature / Outdoor</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img src="https://picsum.photos/400/300/?random=5" width="400" height="300" data-uk-img alt="Image Not Loaded" />
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
								<h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">A BEAUTIFUL LANDSCAPE HERE</h6>
								<p class="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate velit</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
										John Doe
									</div>
									<div class="uk-width-auto uk-text-right">
										<a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /card --> */}


                    <div class="nature-card" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
										<span class="cat-txt">Nature / Outdoor</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img class="lazy" data-src="https://picsum.photos/400/300/?random=5" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif"/>
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
								<h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">A BEAUTIFUL LANDSCAPE HERE</h6>
								<p class="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate velit</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
										John Doe
									</div>
									<div class="uk-width-auto uk-text-right">
										<a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
									</div>
								</div>
							</div>
						</div>
					</div>

{/* Card2 ended */}

{/* Card 3 */}


<div class="nature-card" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
										<span class="cat-txt">Nature / Outdoor</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img class="lazy" data-src="https://picsum.photos/400/300/?random=5" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif"/>
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
								<h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">A BEAUTIFUL LANDSCAPE HERE</h6>
								<p class="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate velit</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
										John Doe
									</div>
									<div class="uk-width-auto uk-text-right">
										<a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
									</div>
								</div>
							</div>
						</div>
					</div>

                    {/* Card4 */}

                    <div class="nature-card" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
										<span class="cat-txt">Nature / Outdoor</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img class="lazy" data-src="https://picsum.photos/400/300/?random=5" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif"/>
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
								<h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">A BEAUTIFUL LANDSCAPE HERE</h6>
								<p class="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate velit</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
										John Doe
									</div>
									<div class="uk-width-auto uk-text-right">
										<a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
									</div>
								</div>
							</div>
						</div>
					</div>


                    {/* Card 5 */}


                    <div class="nature-card" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
										<span class="cat-txt">Nature / Outdoor</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img class="lazy" data-src="https://picsum.photos/400/300/?random=5" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif"/>
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
								<h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">A BEAUTIFUL LANDSCAPE HERE</h6>
								<p class="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate velit</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
										John Doe
									</div>
									<div class="uk-width-auto uk-text-right">
										<a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
										<a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
									</div>
								</div>
							</div>
						</div>
					</div>

  </div>

 </div>

        </div>
    )
}

export default GridCard