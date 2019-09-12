import * as $ from 'jquery';
import 'bootstrap';
import '../stylesheets/index.scss';
import InputContainer from './modules/InputContainer';
$(() => $(".input-container").each((i,e) => new InputContainer(e)));