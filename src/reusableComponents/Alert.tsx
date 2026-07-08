interface AlertModel {
  alertTitle: string;
  aletrtMessage: string;
  alertClassName: string;
}

function Alert(alertData: AlertModel) {
  return (
    <div className={'alert '+ alertData.alertClassName}>
      <strong>{alertData.alertTitle}!</strong> {alertData.aletrtMessage}
    </div>
  );
}

export default Alert;
