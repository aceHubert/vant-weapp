export const openType = Behavior({
  properties: {
    openType: String
  },

  methods: {
    bindGetUserInfo (event: Partial<Weapp.Event>) {
      let callback;
      if (callback = this.data['onGetUserInfo']) {
        callback(event.detail)
      } else {
        this.$emit('getuserinfo', event.detail);
      }
    },

    bindContact (event: Partial<Weapp.Event>) {
      let callback;
      if (callback = this.data['onContact']) {
        callback(event.detail)
      } else {
        this.$emit('contact', event.detail);
      }
    },

    bindGetPhoneNumber (event: Partial<Weapp.Event>) {
      let callback;
      if (callback = this.data['onGetPhoneNumber']) {
        callback(event.detail)
      } else {
        this.$emit('getphonenumber', event.detail);
      }
    },

    bindOpenSetting (event: Partial<Weapp.Event>) {
      let callback;
      if (callback = this.data['onOpenSetting']) {
        callback(event.detail)
      } else {
        this.$emit('opensetting', event.detail);
      }
    },

    bindError (event: Partial<Weapp.Event>) {
      let callback;
      if (callback = this.data['onError']) {
        callback(event.detail)
      } else {
        this.$emit('error', event.detail);
      }
    }
  }
});
