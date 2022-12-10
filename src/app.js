import './styles.css'
import ContextMenu from './menu'

new ContextMenu('.menu').renderContextMenu();

import { TaimerModule } from './modules/taimer.module.js'

new TaimerModule('time','time').trigger()

