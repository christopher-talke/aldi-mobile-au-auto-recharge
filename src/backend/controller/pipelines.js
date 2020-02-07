import { checkBalance, compareBalance, triggerRecharge } from './automate';
import log from './log';

const rechargePipeline = async () => {
  // Check Balance
  const balance = await checkBalance();
  // Compare Balance Against Minimum Value
  const recharge = await compareBalance(balance);
  // Return early if you don't need to recharge
  // if (recharge === false) {
  //   await log(`${new Date()} - Balance check complete, current balance is $${balance.toFixed(2)}, value is greater than minimum value, not recharging.`);
  //   return;
  // }
  // Trigger Recharge
  await log(`${new Date()} - Balance check complete, current balance is $${balance.toFixed(2)}, value is less than minimum value, proceeding with recharge.`);
  const rechargeSuccess = await triggerRecharge();
  // Return
};

export default rechargePipeline;
