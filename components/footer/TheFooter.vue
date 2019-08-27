<template>
	<div class="footer">
		<div class="footer__chito-ra-sign">
			<AppLogoSign color="#fff"></AppLogoSign>
		</div>
		<div class="footer__chito-ra-logo">
			<AppLogo color="#fff"></AppLogo>
		</div>
		<div class="footer__blocks">
			<div class="footer__blocks item-1">1</div>

			<div class="footer__blocks item-2">
				<div class="textwidget">
					<form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-10372" method="post" data-id="10372" data-name="Subscribe for news"><div class="mc4wp-form-fields"><a href="/#email-offers-form" style="display:none" class="vamtam-animated-page-scroll" title=""></a>
					<div class="email-offers" id="email-offers-form">
						<input type="email" name="EMAIL" placeholder="Your email" required=""><input type="submit" value="Subscrible">
						<p>* We never send you spam!</p>
					</div>
				</div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off"></label><input type="hidden" name="_mc4wp_timestamp" value="1566743522"><input type="hidden" name="_mc4wp_form_id" value="10372"><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1"><div class="mc4wp-response"></div></form>
					<a href="#"><span class="icon shortcode theme  use-hover" style="color:#cb7152;font-size:22px !important;"></span></a> <a href="#"> <span class="icon shortcode   use-hover" style="color:#cb7152;font-size:18px !important;"></span></a>&nbsp; <a href="#"><span class="icon shortcode   use-hover" style="color:#cb7152;font-size:18px !important;"></span></a>&nbsp; <a href="#"><span class="icon shortcode   use-hover" style="color:#cb7152;font-size:18px !important;"></span></a>&nbsp; <a href="#"><span class="icon shortcode   use-hover" style="color:#cb7152;font-size:18px !important;"></span></a>
				</div>
			</div>
			<div class="footer__blocks item-3">3</div>
		</div>
	</div>
</template>

<script>
    import AppLogo from '@/components/shared/AppLogo'
    import AppLogoSign from '@/components/shared/AppLogoSign'

    export default {
        components: {
            AppLogo,
            AppLogoSign
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="scss">
	.main-footer .mc4wp-form {
		padding-top: 10px;
		padding-bottom: 20px;
	}
	.main-footer .mc4wp-form input[type=email] {
		width: 240px;
		display: inline-block;
		vertical-align: top;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-right: none;
		width: 66%;
	}
	.main-footer .mc4wp-form input[type=submit] {
		font-size: 12px;
		line-height: 1em;
		color: #fff;
		text-align: center;
		vertical-align: top;
		padding: 1em 0em !important;
		border: solid 1px #cb7152;
		background: transparent;
		border-radius: 0px;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		width: 34%;
	}
	.main-footer .mc4wp-form input, .main-footer .mc4wp-form textarea, .main-footer .mc4wp-form select {
		transition: all .3s;
		margin: 0px;
		background: none;
		font-size: 14px;
		line-height: 18px;
		height: 46px;
		border-color: rgba(255,255,255,0.3);
		color: #ffffff;
	}
	footer.main-footer input[type=text], footer.main-footer input[type=tel], footer.main-footer input[type=email], footer.main-footer input[type=password], footer.main-footer input[type=email], footer.main-footer input[type=search], footer.main-footer input[type=date], footer.main-footer input[type=range], footer.main-footer input[type=number], footer.main-footer input[type=button], footer.main-footer input[type=tel], footer.main-footer textarea, footer.main-footer select {
		background: transparent;
		color: #ffffff;
	}
	.main-footer .mc4wp-form input[type=email] {
		display: inline-block;
		vertical-align: top;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
		border-right: none;
		width: 66%;
	}
	.button, input[type=button], input[type=submit] {
		display: inline-block;
		text-align: center;
		cursor: pointer;
		position: relative;
		z-index: 0;
		vertical-align: middle;
		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
		text-decoration: none;
		text-shadow: none;
		border-radius: 10em;
		border: none;
		text-align: center !important;
		font: normal 13px/1em "Varela Round";
		padding: 1em 2em;
		transition: color .3s ease-out,border .3s ease-out,background .3s ease-out !important;
		background: transparent;
		border: solid 1px #cb7152;
		color: #000;
	}


	.footer {
		background-color: #282b32;
		min-height: 300px;
		padding: 3rem 0;

		#{&}__chito-ra-sign {
			width: 50px;
			margin: 0 auto;
		}
		#{&}__chito-ra-logo {
			width: 130px;
			margin: 1rem auto;
		}

		#{&}__blocks {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			&.item-1 {
				order: 0;
				width: 33vw;
			}
			&.item-2 {
				order: 0;
				width: 33vw;
			}
			&.item-3 {
				order: 0;
				width: 33vw;
			}
		}

	}
</style>