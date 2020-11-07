import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker';
import '../imports/ui/plugins'

Vue.use(VueMeteorTracker);

import App from '../imports/ui/App.vue'

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
    })
})
