<template>
  <div class="page-container">
    <div class="consent-form-container">
      <div class="form-header-container">
        <p>I agree to receive <b>marketing communication</b> from these companies.</p>
      </div>
      <div class="field">
        <div class="control checkbox-container">
          <label v-for="(item,key) in inputLabel" class="checkbox" :key="key">
            <input type="checkbox" :id="key" :value="key" v-model="acceptedConsent">
            {{inputLabel[key].label}}
          </label>
        </div>
      </div>
      <div class="button-container">
        <div class="select-all-btn-container">
          <span>Select all</span>
        </div>
        <div class="accept-btn-container" @click="submitForm">
          <span>Submit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	name: 'callcenter-consent',
  
  data () {
    return {
      acceptedConsent: [],
      inputLabel: {
        delivery: {
          label: "1112 Delivery",
          value: "delivery",
          consentMessageID: "1qWOlWx4XSlqzgsLE6SrhVSSvsa"
        },
        pizzaCompany: {
          label: "The Pizza Company",
          value: "pizzaCompany",
          consentMessageID: "1qWOqh2cJdMTvVREr8kiwXnFTaC"
        },
        swensens: {
          label: "Swensen's",
          value: "swensens",
          consentMessageID: "1qWOwGa2bEFYkYfN3hLL921EomF"
        },
        burgerKing: {
          label: "Burger King",
          value: "burgerKing",
          consentMessageID: "1qWP1Zj92vfNzm4KkwHm4QIoNAa"
        },
        sizzler: {
          label: "Sizzler",
          value: "sizzler",
          consentMessageID: "1qWP5x5ikWaGXPcIwdbjuwnwCQH"
        },
        dairyQueen: {
          label: "Dairy Queen",
          value: "dairyQueen",
          consentMessageID: "1qWPKhjnN3ZLg3gDYWTxIqU5vWh"
        },
        bonchon: {
          label: "Bonchon",
          value: "bonchon",
          consentMessageID: "1qWPOpqSXOmaTG5ByvtXmRTuZIH"
        },
        affiliatedCompany: {
          label: "The affiliated Company",
          value: "affiliatedCompany",
          consentMessageID: "1qWPWq9yCl9KBjU3u5WO4zYQ9sV"
        }
      }
    };
  },
  
  methods: {
    checkAll() {
      
    },
    submitForm() {
      for (let topic of this.acceptedConsent) {
        let payload = {
          consent_message_id: this.inputLabel[topic].consentMessageID,
          version: 1,
          permission: {
            terms_and_conditions: true,
            privacy_overview: true,
            email: true,
            sms: true,
          }
        }
        this.$pam.submitConsent(payload);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-top: 100px;
    min-height: calc(100vh - 100px);    
  }
  .consent-form-container {
    // padding: 30px 50px;
    margin: 50px 0 100px;
    border-radius: 14px;
    box-shadow: 8px 8px 15px #0000002a;
    background-color: #fafafa;
  }
  .form-header-container {
    color: #FFFFFF;
    border-radius: 14px 14px 0 0;
    background-color: #00B0FE;
    padding: 25px 30px;
  }
  .checkbox-container {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
  }
  .checkbox-container label {
    padding: 10px 20px;
    border-radius: 5px;
  }
  .checkbox-container label input {
    margin-right: 5px;
  }
  .checkbox-container label:hover {
    background-color: #00b2fe77;
  }
  .button-container {
    display: flex;
    height: 40px;
  }
  .select-all-btn-container {
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0 14px;
    background-color: transparent;
    cursor: pointer;
  }
  .accept-btn-container {
    flex-basis: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3eaa79;
    border-radius: 0 0 14px 0;
    cursor: pointer;
    
    color: #FFFFFF;
    font-weight: 600;
  }
  .accept-btn-container:hover {
    background-color: #48c78e;
  }
</style>


