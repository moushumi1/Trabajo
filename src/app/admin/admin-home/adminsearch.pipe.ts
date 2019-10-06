import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminsearch'
})
export class AdminsearchPipe implements PipeTransform {
  nameSearch;citySearch; //result=[]; output:any='';output1:any;
  transform(users: any, name: any,city: any,profession: any): any {
    console.log("name: "+name); 
    console.log("profession: "+profession); 
     if(name=='' && city=='' && profession=='') return users;
    //return users;undefined && city===undefined && profession===undefined
    if(city=='') city='#';if(name=='') name='#';if(profession=='') profession='#';
    return this.nameSearch= users.filter(user=>{
      return user.firstName.toLowerCase().includes(name.toLowerCase())
     || user.city.toLowerCase().includes(city.toLowerCase())
      //return user.city.toLowerCase().includes(city.toLowerCase())
      //||
     // return user.profession.toLowerCase().includes(profession.toLowerCase());
     })

     
    //  this.citySearch=users.filter(user=>{
    //  return user.city.toLowerCase().includes(city.toLowerCase());
    // })
    // this.result=[this.nameSearch,this.citySearch];

    // for (let i = 0; i < (this.result.length); i++) {
    //  // console.log(studentMap[studentDetails[i].id].name); // Test Person1, Test Person 3
    //  if(this.result[i]!=''){
    //   console.log(i+" LOOP :"+JSON.stringify(this.result[i]));
    //   this.output=(this.output||this.result[i]);
    //   console.log(i+" LOOP-1 :"+JSON.stringify(this.output));
    //  }
    // }
   // console.log(" OUTPUT :"+JSON.stringify(this.output));
   // return this.output;

  }
}
