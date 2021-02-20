import React, { Component } from 'react'
import ClassDetail from './class_detail'
import { Link, withRouter } from 'react-router-dom';
import ClassTimeIndexContainer from '../classtime/classtime_index_container';
import ClassFormContainer from '../class_form/class_form_container'
import ClassTimeFormContainer from '../classtime/classtime_form_container';

import { PrimaryHref, BreadCrumbSection } from '../styles/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Container, Grid } from '@material-ui/core'
import LoadingIcon from './loading_icon';

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
    return this.props._class.admin._id === this.props.currentUserId;
  }

  isEdit() {
    return this.props.match.path.includes('edit') && this.isClassOwner()
  }

  render() {
    const { classId, _class, loading } = this.props;
    const breadcrumb = (
      <Grid item xs>
        <PrimaryHref to="/classes"><ArrowBackIosIcon style={{ fontSize: '0.875rem' }} /> Back to All Classes</PrimaryHref>
      </Grid>
    )
    if (loading) {
      return (<LoadingIcon />);
    }
    if (!this.isEdit()) {
      return (
        <div>
          <Container maxwidth="sm">
          <Grid
            container
            spacing={4}
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <BreadCrumbSection>
              {breadcrumb}  
            </BreadCrumbSection>

            <Grid
              container
              direction="row"
              justify="center"
              spacing={4}
            >

              <Grid item sm={12} md={8}>
                <ClassDetail 
                  _class={_class}
                  editLink={this.isClassOwner() ? <PrimaryHref to={`/classes/${classId}/edit`}>Edit Class</PrimaryHref>: null}
                />
              </Grid>
              
              <Grid item sm={12} md={4}>
                <ClassTimeIndexContainer 
                  // _class={_class}
                  classId={classId}
                  isEdit={false}
                  isClassOwner={this.isClassOwner()}
                />
              </Grid>

            </Grid>
          </Grid>
          </Container>
        </div>
      )
    } else {
      return (
        <div className="formWrapper">
            
          <Container maxwidth="sm">
            {breadcrumb}
          </Container>

          <ClassFormContainer 
            _class={_class}
            isNew={false}
          />

          <ClassTimeFormContainer 
            classId={classId}
          />

          <Container maxwidth="sm">
            <div className="formWrapper-end">
              <ClassTimeIndexContainer
                // _class={_class}
                classId={classId}
                isEdit={true}
                isClassOwner={this.isClassOwner()}
              />
            </div>
          </Container>

        </div>
      )
    }
  }
}

export default withRouter(ClassShow);