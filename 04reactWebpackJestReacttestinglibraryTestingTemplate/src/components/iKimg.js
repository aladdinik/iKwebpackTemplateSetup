import li from '../images/li.jpg';

const iKimg = () => {
	const Ikimg = document.createElement('img');

	Ikimg.src = li;

	Ikimg.style.cssText = 'width: 200px; border: 3px green dashed';

	return Ikimg;
}; /*END iKimg */

export default iKimg;