import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import { } from '@fortawesome/free-regular-svg-icons'

import {
    faUser,
    faLock,
    faSignOutAlt,
    faCog,
    faLanguage
    
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faUser, faLock, faSignOutAlt, faCog,faLanguage
);

Vue.component('fa', FontAwesomeIcon);
