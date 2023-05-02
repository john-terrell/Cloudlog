<div class="container">
	<br>
	<h2><?php echo $page_title; ?></h2>

	<div class="card">
		<div class="card-header">
			Export your logbook for use in DX Atlas to display worked / confirmed gridsquares.
		</div>

		<div class="alert alert-warning" role="alert">
			Only QSOs with a gridsquare defined will be exported!
		</div>

		<div class="card-body">

			<form class="form" action="<?php echo site_url('dxatlas/export'); ?>" method="post" enctype="multipart/form-data">
				<div class="form-row">
					<div class="form-group col-md-3">
						<label for="station_profile"><?php echo $this->lang->line('cloudlog_station_profile'); ?></label>
						<select name="station_profile" class="station_id custom-select">
							<option value="All">All</option>
							<?php foreach ($station_profile->result() as $station) { ?>
								<option value="<?php echo $station->station_id; ?>">Callsign: <?php echo $station->station_callsign; ?> (<?php echo $station->station_profile_name; ?>)</option>
							<?php } ?>
						</select>
					</div>
				</div>

				<div class="form-row">
				<div class="form-group col-md-3">
					<label for="band">Band</label>
					<select id="band" name="band" class="custom-select">
						<option value="All" <?php if ($this->input->post('band') == "All" || $this->input->method() !== 'post') echo ' selected'; ?> >Every band</option>
						<?php foreach($worked_bands as $band) {
							echo '<option value="' . $band . '"';
							if ($this->input->post('band') == $band) echo ' selected';
							echo '>' . $band . '</option>'."\n";
						} ?>
					</select>
				</div>
					<div class="form-group col-md-3">
						<label for="mode">Mode</label>
						<select id="mode" name="mode" class="form-control custom-select">
							<option value="All">All</option>
							<?php
							foreach($modes->result() as $mode){
								if ($mode->submode == null) {
									echo '<option value="' . $mode->mode . '">'. $mode->mode . '</option>'."\n";
								} else {
									echo '<option value="' . $mode->submode . '">' . $mode->submode . '</option>'."\n";
								}
							}
							?>
						</select>
					</div>

				<div class="form-group col-md-4">
					<label for="dxcc_id">DXCC</label>
					<select class="custom-select" id="dxcc_id" name="dxcc_id">
						<option value="All">All</option>
						<?php
						foreach($dxcc as $d){
							echo '<option value=' . $d->adif . '>' . $d->prefix . ' - ' . ucwords(strtolower($d->name), "- (/");
							if ($d->Enddate != null) {
								echo ' ('.$this->lang->line('gen_hamradio_deleted_dxcc').')';
							}
							echo '</option>';
						}
						?>

					</select>
				</div>

				</div>



				<div class="form-row">
					<div class="form-group col-md-3">
					<label for="cqz">CQ Zone</label>
					<select class="custom-select" id="cqz" name="cqz">
						<option value="All">All</option>
						<?php
						for ($i = 1; $i<=40; $i++) {
							echo '<option value="'. $i . '">'. $i .'</option>';
						}
						?>
					</select>
				</div>

				<div class="form-group col-md-5">
					<label for="selectPropagation">Propagation Mode</label>
					<select class="custom-select" id="selectPropagation" name="prop_mode">
						<option value="All">All</option>
						<option value="AS">Aircraft Scatter</option>
						<option value="AUR">Aurora</option>
						<option value="AUE">Aurora-E</option>
						<option value="BS">Back scatter</option>
						<option value="ECH">EchoLink</option>
						<option value="EME">Earth-Moon-Earth</option>
						<option value="ES">Sporadic E</option>
						<option value="FAI">Field Aligned Irregularities</option>
						<option value="F2">F2 Reflection</option>
						<option value="INTERNET">Internet-assisted</option>
						<option value="ION">Ionoscatter</option>
						<option value="IRL">IRLP</option>
						<option value="MS">Meteor scatter</option>
						<option value="RPT">Terrestrial or atmospheric repeater or transponder</option>
						<option value="RS">Rain scatter</option>
						<option value="SAT">Satellite</option>
						<option value="TEP">Trans-equatorial</option>
						<option value="TR">Tropospheric ducting</option>
					</select>
				</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-3">
						<label for="datetimepicker1">From date:</label>
						<div class="dxatlasdatepicker input-group date col-md-12" id="datetimepicker1" data-target-input="nearest">
							<input name="fromdate" type="text" placeholder="DD/MM/YYYY" class="form-control datetimepicker-input" data-target="#datetimepicker1"/>
							<div class="input-group-append"  data-target="#datetimepicker1" data-toggle="datetimepicker">
								<div class="input-group-text"><i class="fa fa-calendar"></i></div>
							</div>
						</div>
					</div>

					<div class="form-group col-md-3">
						<label for="datetimepicker2">To date:</label>
						<div class="dxatlasdatepicker input-group date col-md-12" id="datetimepicker2" data-target-input="nearest">
							<input name="todate" "totype="text" placeholder="DD/MM/YYYY" class="form-control datetimepicker-input" data-target="#datetimepicker2"/>
							<div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
								<div class="input-group-text"><i class="fa fa-calendar"></i></div>
							</div>
						</div>
					</div>
				</div>
				<br>
				<button type="submit" class="btn btn-primary mb-2" value="Export">Export</button>
			</form>
		</div>
	</div>
</div>
