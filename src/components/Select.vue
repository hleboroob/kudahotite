<template>
  <div class="select">
    <label>{{name}}</label>
    <select ref="selected" id='test' v-model="selected" v-on:change="changeSelect">
      <option selected value="clear">Очистить</option>
      <option v-for="option in options" :key="option.id" :value="option.id">{{option.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "select",
  data() {
    return {
      selected: ""
    };
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.selected);
  },
  methods:{
    changeSelect(){
      if(this.selected === 'clear'){
        document.getElementById('test').value = ''
        console.log(document.getElementById('test').value);
        this.selected = ''
      }
      this.$emit('change', this.selected)
      
    }
  },
  props: {
    name: {
      type: String,
      default: "Select"
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px grey;
  position: absolute;
  top: 20px;
  right: 0;
  width: 100%;
}
.options p:hover {
  background: grey;
}
</style>