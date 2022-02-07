export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.block1=undefined;
    this.block2=undefined;
    this.ticks=0;
    this.string=`...\n...\n...\n`;
    this.isAtBottom=false;
 
  }

  toString() {
    
    return this.string;
  }
  drop(block){
    if(this.ticks===0 && this.block1===undefined){
      this.block1=block;
      this.string=`.${this.block1.color}.\n...\n...\n`;
    
    }else if(this.ticks!==2){
      block.string=this.string;
      throw new Error('already falling');
      
    }else if(this.ticks===2){
      this.block2=block;
      this.string=`.${this.block2.color}.\n...\n.${this.block1.color}.\n`;
      this.ticks=1;
      
    }
 
  }
  hasFalling(){
   // console.log(this.ticks)
    return !this.isAtBottom;
  }
  tick(){
    if(this.ticks===0){
      this.string=`...\n.${this.block1.color}.\n...\n`;
      ++this.ticks;
    }else if(this.ticks===1 &&this.block2===undefined ){
      this.string=`...\n...\n.${this.block1.color}.\n`;
      ++this.ticks;
    }else if(this.ticks===2 &&this.block2 ===undefined){
      this.isAtBottom=!this.isAtBottom;
    }else if(this.ticks===1 &&this.block2){
      this.isAtBottom=!this.isAtBottom;
      this.string=`...\n.${this.block2.color}.\n.${this.block1.color}.\n`;
    }
        
   
  }
}


