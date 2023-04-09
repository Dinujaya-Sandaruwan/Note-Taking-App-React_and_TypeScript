import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";

type NoteFormProps = {
	onSubmit: (data: NoteData) => void;
};

function NoteForm({ onSubmit }: NoteFormProps) {
	const titleRef = useRef<HTMLInputElement>(null);
	const markDownRef = useRef<HTMLTextAreaElement>(null);
	const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		onSubmit({
			title: titleRef.current!.value,
			markdown: markDownRef.current!.value,
			tags: [],
		});
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control ref={titleRef} required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Tags</Form.Label>
							<CreatableReactSelect
								value={selectedTags.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
								onChange={(tags) => {
									setSelectedTags(
										tags.map((tag) => {
											return { label: tag.label, id: tag.value };
										})
									);
								}}
								isMulti
							/>
						</Form.Group>
					</Col>
				</Row>
				<Form.Group controlId="markdown">
					<Form.Label>Body</Form.Label>
					<Form.Control ref={markDownRef} required as="textarea" rows={15} />
				</Form.Group>
				<Stack direction="horizontal" gap={2} className="justify-content-end">
					<Button type="submit" variant="primary">
						Save
					</Button>
					<Link to="..">
						<Button variant="outline-secoundary">Cancel</Button>
					</Link>
				</Stack>
			</Stack>
		</Form>
	);
}

export default NoteForm;
