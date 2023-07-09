describe('Automation Mobile Apk Diet Meal', () => {
    it ('should open apps and view home screen', async() => {

      // Assert Verif Form User Input
      const FormInputUser = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
      expect(FormInputUser).toBeDisplayed();

      //Input Name
      const Inputname = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText');
      await Inputname.click(); 
      await Inputname.setValue('Diana Aprilia');

     //Input weight
      const Inputweight = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText');
      await Inputweight.click();
      await Inputweight.setValue('55');
  
      //Input height
      const Inputheight = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText');
      await Inputheight.click(); 
      await Inputheight.setValue('165');

      //Select gender
      const SelectFemale = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[2]');
      await SelectFemale.click();

      //Hide keyboard
      await driver.hideKeyboard();
    
      //Click button Next
      const ClickButtonNext = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button');
      await ClickButtonNext.click();

      //Assert Verify routine activity
      const routineActivity = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
      expect(routineActivity).toBeDisplayed();

      //Select routine activity
      const SelectroutineActivity = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[4]');
      await SelectroutineActivity.click();      

      //Click button Selesai
      const ClickButtonSelesai = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button');
      await ClickButtonSelesai.click();   
      
      //Assert verify redirection to home screen
      const homeScreen = await $('//android.widget.FrameLayout[@content-desc="Home"]/android.widget.ImageView');
      expect(homeScreen).toBeDisplayed();  
    })

it ('should view meal screen', async() => {
      //Assert verify to meal screen
      const mealScreen = await $('//android.widget.FrameLayout[@content-desc="Meals"]/android.widget.ImageView');
      expect(mealScreen).toBeDisplayed(); 
      await mealScreen.click(); 

      //Check Espresso kcal
      const SelectEspresso = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[6]');
      await SelectEspresso.click();   

      //Assert verify espressoInformationKcal
      const EspressoInfo = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]');
      expect(EspressoInfo).toBeDisplayed();      
      const NutrionFacts = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]');
      expect(NutrionFacts).toBeDisplayed();      

    })
      
})