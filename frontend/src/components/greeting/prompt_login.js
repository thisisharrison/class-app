import { Dialog, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router';

const PromptLogin = ({ promptLogin, closeLoginPrompt, history }) => {
  const [ open, setOpen ] = useState(false);

  const handleClose = async () => {
    setOpen(false);
    const prompt = await closeLoginPrompt();
    if (prompt.type) {
      history.push('/account/login');
    }
  }

  useEffect(() => {
    setOpen(promptLogin);
  }, [promptLogin])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aira-labelledby='please-signin'
        aria-describedby='signin-to-perform-action'
      >
        <DialogTitle id='please-signin'>{"Sign In to Enjoy all Class App Features!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='signin-to-perform-action'>
            Like what you see? Sign In to Save and Book classes with our ambassadors worldwide! 
          </DialogContentText>
          <Button onClick={handleClose} color='primary'>
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default withRouter(PromptLogin);