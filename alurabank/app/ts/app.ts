import { NegotiationController } from './controllers/negotiationController'

const controller = new NegotiationController();
$('.form').submit(controller.add.bind(controller));
$('#import').click(controller.importData.bind(controller));