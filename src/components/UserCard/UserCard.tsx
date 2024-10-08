import React from "react";
import { User } from "../../types/User";
import styles from './UserCard.module.scss';
import { Card } from "react-bootstrap";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
	<Card className={styles.card}>
		<Card.Body>
			<Card.Title>{user.name}</Card.Title>
			<Card.Text>
					<strong>Username:</strong> {user.username}<br />
					<strong>Email:</strong> {user.email}<br />
					<strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.zipcode}, ${user.address.city}`}<br />
					<strong>Phone:</strong> {user.phone}<br />
					<strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a><br />
					<div className={styles.companyInfo}>
						<strong>Company:</strong> {user.company.name}<br />
						<strong>Catchphrase:</strong> {user.company.catchPhrase}<br />
						<strong>Business:</strong> {user.company.bs}<br />
					</div>
			</Card.Text>
		</Card.Body>
	</Card>
);

export default UserCard;