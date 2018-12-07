export var openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      var callback;

      if (callback = this.data['onGetUserInfo']) {
        callback(event.detail);
      } else {
        this.$emit('getuserinfo', event.detail);
      }
    },
    bindContact: function bindContact(event) {
      var callback;

      if (callback = this.data['onContact']) {
        callback(event.detail);
      } else {
        this.$emit('contact', event.detail);
      }
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      var callback;

      if (callback = this.data['onGetPhoneNumber']) {
        callback(event.detail);
      } else {
        this.$emit('getphonenumber', event.detail);
      }
    },
    bindOpenSetting: function bindOpenSetting(event) {
      var callback;

      if (callback = this.data['onOpenSetting']) {
        callback(event.detail);
      } else {
        this.$emit('opensetting', event.detail);
      }
    },
    bindError: function bindError(event) {
      var callback;

      if (callback = this.data['onError']) {
        callback(event.detail);
      } else {
        this.$emit('error', event.detail);
      }
    }
  }
});