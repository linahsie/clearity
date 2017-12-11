import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Button, TextArea, Table } from 'semantic-ui-react'
import _ from 'lodash'

import styles from './Class.scss'

class StudentClass extends Component {

    // Constructor for component, calls to this component should pass in a classId param (i.e. /class/:id)
    constructor(props){
        super(props);
        let _dummyData = [
            {upvotes: 5, time: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex nisl. Morbi malesuada erat non dui tristique pulvinar. Vestibulum at feugiat leo, eu tristique ante. In diam ex, accumsan vel turpis ut, feugiat lobortis ipsum. "},
            {upvotes: 3, time: 3, question: "Etiam ex quam, lobortis eu efficitur nec, dictum quis turpis. Morbi non tempor lacus. Aliquam consectetur magna enim, eu dictum quam tempus ac."},
            {upvotes: 1, time: 2, question: "Dummy Data 3"},
        ];
        this.state = {
            classId: "",
            isActive: this.props.active,
            studentQuestion: "",
            sortColumn: "Upvotes",
            direction: "descending",
            questions: _.sortBy(_dummyData, ["Upvotes"])
        }
    }

    sortTable = clickedColumn => () => {

        let questionData = this.state.questions;
        let currentDirection = this.state.direction;
        if (this.state.sortColumn !== clickedColumn) {
            this.setState({
                sortColumn: clickedColumn,
                questions: _.sortBy(questionData, [clickedColumn]),
                direction: 'descending'
            })
        }else{
            this.setState({
                questions: questionData.reverse(),
                direction: currentDirection === 'ascending' ? 'descending' : 'ascending',
            })
        }
    }

    askQuestion = (event) => {
        event.preventDefault();
        let question = this.state.studentQuestion;
        this.setState({studentQuestion:""});
    }

    generateQuestionRow = (questionObj, index) => {
        return (
            <Table.Row key={index}>
                <Table.Cell textAlign='center'>{questionObj.upvotes}</Table.Cell>
                <Table.Cell textAlign='center'>{questionObj.time}</Table.Cell>
                <Table.Cell>{questionObj.question}</Table.Cell>
            </Table.Row>
        )
    }

    renderActive() {
        let sortBy = this.state.sortColumn;
        let currentDirection = this.state.direction;
        return(
            <div>
                <Container className="questionSection">
                    <h3>Ask A Question</h3>
                    <TextArea className="question" placeholder='Your Question Here...' autoHeight rows={3} onChange={(event,data) => this.setState({question: data.value})}/>
                    <br></br>
                    <Button className="submit" onClick={this.askQuestion}>
                        Submit
                    </Button>
                </Container>
                <Container className="questionList">
                    <h3>Current Questions</h3>
                    <Table sortable padded striped celled className="questionsTable">
                        <Table.Header className="tableHeader">
                            <Table.Row>
                                <Table.HeaderCell sorted={sortBy === 'Upvotes' ? currentDirection : null} onClick={this.sortTable('upvotes')}>Upvotes</Table.HeaderCell>
                                <Table.HeaderCell sorted={sortBy === 'Time' ? currentDirection : null} onClick={this.sortTable('time')}>Time</Table.HeaderCell>
                                <Table.HeaderCell>Question</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.questions.map(this.generateQuestionRow)}
                       </Table.Body>
                    </Table>
                </Container>
            </div>
        )
    }

    render(){
        console.log(this.state);
        return(
            <div className={this.state.isActive ? '' : 'inactiveHeader'}>
                {this.state.isActive ? this.renderActive() : <h3>Class is currently not active</h3>}
            </div>
        )
    }
}

StudentClass.propTypes = {
    classId: PropTypes.string,
    isActive: PropTypes.bool,
    isInstructor: PropTypes.bool,
    studentQuestion: PropTypes.string,
    questions: PropTypes.array
}

export default StudentClass
