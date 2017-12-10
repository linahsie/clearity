import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Container, Button, Icon, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import styles from './Class.scss'

class InstructorClass extends Component {

    // Constructor for component, calls to this component should pass in a classId param (i.e. /class/:id)
    constructor(){
        super();
        let _dummyData = [
            {upvotes: 5, time: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex nisl. Morbi malesuada erat non dui tristique pulvinar. Vestibulum at feugiat leo, eu tristique ante. In diam ex, accumsan vel turpis ut, feugiat lobortis ipsum.", student: "Alan Bob"},
            {upvotes: 3, time: 3, question: "Etiam ex quam, lobortis eu efficitur nec, dictum quis turpis. Morbi non tempor lacus. Aliquam consectetur magna enim, eu dictum quam tempus ac.", student: "Charles Dan"},
            {upvotes: 1, time: 2, question: "Dummy Data 3", student: "Eric Frank"},
        ];
        this.state = {
            classId: "",
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
                questions: _.sortBy(questionData, [clickedColumn]).reverse(),
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
        let question = this.state.question;
        this.setState({question:""});
    }

    generateQuestionRow = (questionObj, index) => {
        return (
            <Table.Row key={index}>
                <Table.Cell textAlign='center'>{questionObj.upvotes}</Table.Cell>
                <Table.Cell textAlign='center'>{questionObj.student}</Table.Cell>
                <Table.Cell>{questionObj.question}</Table.Cell>
                <Table.Cell textAlign='center'>{<Icon name='checkmark' />}</Table.Cell>
                <Table.Cell textAlign='center'>{<Icon name='wait' />}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        let sortBy = this.state.sortColumn;
        let currentDirection = this.state.direction;
        return(
            <div>
                <Container className="questionSection">
                    <Button className="instructorQuestion" onClick={this.askQuestion}>
                        Ask Question
                    </Button>
                </Container>
                <Container className="questionList">
                    <h3>Current Questions</h3>
                    <Table sortable padded striped celled className="questionsTable">
                        <Table.Header className="tableHeader">
                            <Table.Row>
                                <Table.HeaderCell sorted={sortBy === 'Upvotes' ? currentDirection : null} onClick={this.sortTable('upvotes')}>Upvotes</Table.HeaderCell>
                                <Table.HeaderCell sorted={sortBy === 'Asked' ? currentDirection : null} onClick={this.sortTable('student')}>Asked By</Table.HeaderCell>
                                <Table.HeaderCell>Question</Table.HeaderCell>
                                <Table.HeaderCell>Answered</Table.HeaderCell>
                                <Table.HeaderCell>Save</Table.HeaderCell>
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
}

InstructorClass.propTypes = {
    classId: PropTypes.string,
    isInstructor: PropTypes.bool,
    studentQuestion: PropTypes.string,
    questions: PropTypes.array
}

export default InstructorClass