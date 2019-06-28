<div class="container">

	<br>

		<?php if($this->session->flashdata('message')) { ?>
			<!-- Display Message -->
			<div class="alert-message error">
			  <p><?php echo $this->session->flashdata('message'); ?></p>
			</div>
		<?php } ?>

	<div id="map" style="width: 100%; height: 800px"></div>

	<?php if ($this->uri->segment(2) == "satellites") { ?>
		<div class="alert alert-success" role="alert">
			Confirmed is Green | Worked but not confirmed is Red
			[This grid square map is publically viewable for sharing]
		</div>
	<?php } ?>

	<?php if ($this->uri->segment(2) == "band") { ?>
		<div class="alert alert-success" role="alert">
			Confirmed is Green | Worked but not confirmed is Red <br>
			[This map does not include satellite, internet or repeater QSOs] <br>
			[This grid square map is publically viewable for sharing]
		</div>
	<?php } ?>
</div>