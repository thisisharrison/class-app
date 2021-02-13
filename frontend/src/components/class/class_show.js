import React, { Component } from 'react'
import ClassDetail from './class_detail'
import { Link, withRouter } from 'react-router-dom';
import ClassTimeIndexContainer from '../classtime/classtime_index_container';
import ClassFormContainer from '../class_form/class_form_container'
import ClassTimeFormContainer from '../classtime/classtime_form_container';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid } from '@material-ui/core'

const BackToAll = styled(Link)`
  font-size: 14px;
  border-bottom: 1px solid #d5d5d5;
  :hover {
    border-bottom: 3px solid #d22030;
  }
`
const BreadCrumb = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`


class ClassShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchClass(this.props.classId)
  }

  // only admin can see the edit button on their own classes
  renderEditButton() {
    if (this.isClassOwner()) {
      return (
        <div>
        <Link to={`/classes/${this.props.classId}/edit`}>Edit</Link>
        </div>
      )
    }
  }

  isClassOwner() {
    return this.props._class && this.props.currentUserId
  }

  isEdit() {
    return this.props.match.path.includes('edit') && this.isClassOwner()
  }

  render() {
    const { classId, _class } = this.props;

    if (!this.isEdit()) {
      return (
        <div>
          <pre>Not editing</pre>
          <Grid
            container
            spacing={4}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <BreadCrumb>
              <BackToAll to="/classes"><ArrowBackIosIcon style={{ fontSize: 14 }}/> Back to All Classes</BackToAll>
            </BreadCrumb>
            
            <Grid
              container
              direction="row"
              spacing={4}
            >
              <Grid item xs={8}>
                <ClassDetail 
                  _class={_class}
                />
              </Grid>
              
              <Grid item xs={4}>
                <ClassTimeIndexContainer 
                  // _class={_class}
                  classId={classId}
                  isEdit={false}
                  isClassOwner={this.isClassOwner()}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <pre>Editing</pre>

          <BackToAll to="/classes">Back to All Classes</BackToAll>

          <ClassFormContainer 
            _class={_class}
            isNew={false}
          />

          <ClassTimeFormContainer 
            classId={classId}
          />

          <ClassTimeIndexContainer
            // _class={_class}
            classId={classId}
            isEdit={true}
            isClassOwner={this.isClassOwner()}
          />

        </div>
      )
    }
  }
}

export default withRouter(ClassShow);