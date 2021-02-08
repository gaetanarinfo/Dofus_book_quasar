<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">
      <q-img
        transition="flip-right"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsvpool.com%2Fwp-content%2Fuploads%2F2018%2F10%2F14-arrested-alleged-discount-bitcoin-mining-south-korea.jpg&f=1&nofb=1"
        style="width: 100%;height:25vh"
      >
        <div class="column absolute-right text-center bg-transparent">
          <q-avatar size="96px" class="q-ma-md shadow-10">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.G93kCBjK6aDrjCbDNJ0dBAAAAA%26pid%3DApi&f=1" />
          </q-avatar>
          <q-item class="row justify-center" style="position: relative; top: -26px; width: auto">
            <p class="text-h6 text-grey-10 bg-grey-1 q-px-md text-center">{{ data.title }}</p>
          </q-item>
        </div>

        <div class="column absolute-left text-center" style="max-width: 80%">
          <div class="text-grey-12" style="max-width: 70%; min-width: 50%;">
            <p class="text-h4 text-bold q-pa-none">
              <u>{{ data.lastname + data.firstname }}</u>
            </p>
            <p class="q-pa-xs">{{ data.email }}</p>
          </div>
        </div>

      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderUserId',
  props: {
    data: {
      type: Object
    }
  }
}
</script>
