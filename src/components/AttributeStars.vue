<template>
  <div class="rating-container" :style="{ borderColor:  computedColor}">
      <div class="rating-color" :style="{ backgroundColor: computedColor}">
         <h4 v-if="showScore">Vergleich.org</h4>
         <h4 v-else>AUSZEICHNUNG</h4>
      </div>
      <div class="rating-text">
        <p class="rating-text-title">User Bewertung</p> 
          
        <div v-if="showScore" class="grading-container">
          <div class="score-div">{{computedScore}}</div>
          <p class="rating-text-score" :style="{ color: computedColor}">{{computedText }}</p>          
        </div>              
        <p v-else class="rating-text-score" :style="{ color: computedColor}">{{computedText }}</p>
              
      </div>
      <div class="date">02/2021</div>      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

Component.registerHooks([
  'mounted'  
])

@Component
export default class AttributeStars extends Vue  {
  @Prop({ default: 'text' }) type!: string | number 
  @Prop() rating!: number
  @Prop({ default: '#f00' }) color!: string
  @Prop({ default : false }) showScore!: boolean
  private computedColor = ''
  private computedText = ''
  private computedScore = ''
  simpleText = "Hello world"

  private typeArray = ['sehr gut', 'gut', 'befriedigend','ausreichend','mangelhaft','ungenügend' ]

  private mounted(){
    this.computedColor = this.getRatingColor()
    this.computedText = this.getRatingText()  
    this.computedScore = this.getGrading()  
  }

  getRatingText(): string{   
    const rating = this.rating
    let ratingText = ''
    if(rating >= 90 && rating <= 100){
      ratingText = this.typeArray[0]
    }else if(rating >= 70 && rating <= 89){
      ratingText = this.typeArray[1]
    }else if(rating >= 50 && rating <= 69){
      ratingText = this.typeArray[2]
    }else if(rating >= 30 && rating <= 49){
      ratingText = this.typeArray[3]
    }else if(rating >= 20 && rating <= 29){
      ratingText = this.typeArray[4]
    }else{
      ratingText = this.typeArray[5]
    }
    
    return ratingText.toUpperCase()
  }

  getGrading(): string {
    const rating = this.rating;
    let result = (((100-rating)/100)*3 + 1).toFixed(1) 
    return result.toString().split('.').join(',')    
  }

  getRatingColor(): string{   
    const typeText = this.getRatingText().toLowerCase() 
    let colorProp = '' 
    if(typeText === this.typeArray[0]){      
        colorProp = '#739aff' 
    }else if(typeText === this.typeArray[1]){     
        colorProp = 'red'
    }else{
        colorProp = this.color        
    }      
    return colorProp   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.rating-container {
  border-width: 2px;
  border-style: solid;
  width: 250px;
  margin: 15px auto;
}
.rating-container  .rating-color {
  color: #fff;
  font-weight: bold;
  padding: 10px 5px;
  
  h4{
    margin: 0;
  }
}

.score-div{     
    font-size: 50px    
}

.rating-container .date{
  background-color: #aca5a536;
  padding: 5px 
}
  
</style>

