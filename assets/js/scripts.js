// Force text
var $brand = $('.navbar-brand');
if ( $brand.text() !== 'Unnamed Calculator') {
	console.log('The brand ')
	$brand.text('Unnamed Calculator');
}