import React from "react";
import { User } from "../../types/User";
import styles from './UserCard.module.scss';
import { Card } from "react-bootstrap";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const { street, suite, city, zipcode } = user.address;

	return (
		<Card className={styles.userCard}>
			<Card.Body>
				<Card.Title className={styles.cardTitle}>{user.name}</Card.Title>				
				<Card.Text className={styles.cardText}>
					<strong>Email:</strong> {user.email}
				</Card.Text>
				<Card.Text className={styles.cardText}>
					<strong>Phone:</strong> {user.phone}
				</Card.Text>
				<Card.Text className={styles.cardText}>
					<strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
				</Card.Text>
				
				{/* Address Information */}
				<Card.Text>
					<strong>Address:</strong> {`${street}${suite ? `, ${suite}` : ''}, ${city}, ${zipcode}`}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserCard;