import { QrStyleContext } from '@/context/index';
import TextField from '@mui/material/TextField';
import { useCallback, useContext, useEffect, useState } from 'react';

const EmailInput = () => {
  const { dispatch } = useContext(QrStyleContext);
  const [fields, setFields] = useState({
    email: '',
    subject: '',
    message: '',
    touched: {
      email: false,
      subject: false,
      message: false,
    },
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (fields.email && fields.subject && fields.message) {
      timeoutId = setTimeout(() => {
      
          const mailtoLink = `$paymentid=812798721398$account=${fields.email}&USD=0.0378&token=${encodeURIComponent(
            fields.subject
          )}&price=${encodeURIComponent(fields.message)}`;
          dispatch({ type: 'SET_QR_VALUE', payload: { value: mailtoLink } });
   
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [fields.email, fields.subject, fields.message, dispatch]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prevState) => ({ ...prevState, email: e.target.value }));
  }, []);

  const handleSubjectChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prevState) => ({ ...prevState, subject: e.target.value }));
  }, []);

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prevState) => ({ ...prevState, message: e.target.value }));
  }, []);

  const handleBlur = (field: string) => {
    setFields((prevState) => ({
      ...prevState,
      touched: { ...prevState.touched, [field]: true },
    }));
  };


  return (
    <>
      <TextField
        id="email-input"
        label={'PaymentId'}
        variant={'standard'}
        onChange={handleEmailChange}
        onBlur={() => handleBlur('email')}
        value={fields.email}
        fullWidth={true}
        type={'text'}
        error={fields.email === '' && fields.touched.email}
      />
     
      <TextField
        id="subject-input"
        label={'Token'}
        variant={'standard'}
        onChange={handleSubjectChange}
        onBlur={() => handleBlur('subject')}
        value={fields.subject}
        fullWidth={true}


        type={'text'}
        error={fields.subject === '' && fields.touched.subject}
      />
      <TextField
        id="message-input"
        label={'Price'}
        variant={'outlined'}
        onChange={handleMessageChange}
        onBlur={() => handleBlur('message')}
        value={fields.message}
        fullWidth={true}
  
        type={'text'}
        sx={{ mt: 2 }}
        error={fields.message === '' && fields.touched.message}
      />





      <p className={'mt-3 text-sm text-light'}>
        Your QR code will be generated automatically once you fill in all three fields{' '}
        <strong>with a valid email address</strong>
      </p>
    </>
  );
};

export default EmailInput;
