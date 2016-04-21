# RandD project Starter kit


## Instalation

1. Fork the following project from GitHub to your GitHub account and Clone it somewhere locally on your machine --> https://github.com/pieron187/RandD.git
2. Install node.js (if not already)
3. Go to your local folder, Install grunt-cli (if not already) --> npm install -g grunt-cli
4. Run 'npm install' to get all dependancies from package.json. You will need the following dependancies:
	* grunt-postcss
	* autoprefixer
	* cssnano
	* grunt-babel
	* babel-preset-es2015
	* babel-preset-react
	* load-grunt-tasks
	* grunt-contrib-uglify
	* grunt-contrib-watch
	* babel-plugin-transform-react-jsx


5. You will also need local server installed --> npm install http-server -g
	* usage: http-server go to http://127.0.0.1:8080/app/index.html

6. Running tasks on save --> grunt watch




### Additional information:
Workflow folder contains screenshots for existing and new checkout with all stages. Treat it as a base for coding.




## Folder structure



	- RandD
	
		-- workflow 						==> screenshots of old & updated workflow
		
		-- TDD		 					==> tests code code & setup
	
		-- app 							==> all html, css & JS files
		
			--- src 						==> working files
	
				---- js  				==> JS files
				
					----- plugins 			==> Jquery etc
					
					----- core			==> Main JS files
					
					----- jsx-modules		==> React JSX files
					
				---- css 				==> CSS (or preprocessor) files
				
			--- dist						==> production files after automation
	
	

Potentailly there will be changes to folder structure later on. Let's see how it goes.





## React Modules structure


### Modules types:

	* Cont 						==> container
	* Frm 						==> form
	* Btn 						==> button
	* FrmInp 					==> form inputs
	* Integ						==> 3rd party integration code





### List of modules (.jsx):


	* simpleHeader
	* simpleFooter
	* registrationTabs
	* parcelsContainer
	* singleParcel
	* parcelItem
	* addrOptions
 	* collectPlusOptions
 	* shippingDates
	* parcelsTable
	* calendar
	* registrationFrm
	* loginFrm
	* addrFrm
	* primBtn
	* passwordInputs
	* collectPlusGoogleMap
	* collectPlusInfo
	* paymentOptions
	* mainPaymentOption
	* otherPaymentOptions
	* singleOtherPaymentOption
	* totalPaymentInfo
	* creditLeftInAccount
	* splitPayment
	* lightboxHeader
	* creditAppFrm
	* checkboxBox
	* selectBox
	* rangeSlider
	* dobBox
	* textBox
	* creditAccepted
	* creditBulletPoints
	* parcelsContainer
	* shippingOptions
	* orderInfo
	* deliveryInfo
	* secBtn
	* nextDayDeliveryTimer
	* advertsSection
	* infoMsg
	* splitPaymentSlider
	* parcelsInfo
	* deliveryContainer









### Structure of modules:

	* Registration page:

		- simpleHeader
		- registrationTabs
			-- loginFrm
				--- primBtn
			-- registrationFrm
				--- passwordInputs
				--- primBtn
		- simpleFooter





	* Shipping page

		- simpleHeader
		- parcelsContainer
			-- singleParcel
				--- parcelItem
		- addrFrm
			-- primBtn
		- shippingOptions
			-- addrOptions
			-- collectPlusOptions
				--- collectPlusGoogleMap
				--- collectPlusInfo
		- shippingDates
			-- parcelsTable
			-- nextDayDeliveryTimer
			-- calendar
		- primBtn
		- simpleFooter







	* Payment page

		- simpleHeader
		- parcelsContainer
			-- parcels
				--- singleParcel
					---- parcelItem
		- paymentOptions
			-- mainPaymentOption
				--- creditBulletPoints
				--- creditLeftInAccount
			-- otherPaymentOptions
				--- singleOtherPaymentOption
		- splitPayment
			-- infoMsg
			-- splitPaymentSlider
			-- extendLimit
				--- secBtn
		- totalPaymentInfo
		- primBtn
		- simpleFooter





	* Credit account application lightbox

		- lightboxHeader
		- creditAppFrm
			-- checkboxBox
			-- selectBox
			-- rangeSlider
			-- dobBox
				--- calendar
			-- addrFrm
		- textBox
		- creditAccepted
		- primBtn





	* Order confirmation

		- simpleHeader
		- orderInfo
			-- parcelsInfo
				-- parcels
					--- singleParcel
						---- parcelItem
					--- deliveryInfo
		- secBtn
		- primBtn
		- nextDayDeliveryTimer
		- advertsSection
		- simpleFooter





	* One page checkout

		- simpleHeader
		- deliveryContainer
			-- singleParcel
				--- parcelItem
			-- shippingDates
				--- parcelsTable
				--- nextDayDeliveryTimer
				--- calendar
		- paymentOptions
			-- mainPaymentOption
				--- creditLeftInAccount
			-- otherPaymentOptions
				--- singleOtherPaymentOption
		- totalPaymentInfo
		- primBtn
		- simpleFooter


