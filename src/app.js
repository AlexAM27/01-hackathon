import './styles.css'
import ContextMenu from './menu'

new ContextMenu('.menu').renderContextMenu();

document.body.style.background = localStorage.getItem('backgroundColor');

