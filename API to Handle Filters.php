<?php
header('Content-Type: application/json');

$conditions = [];
if (isset($_GET['end_year'])) {
    $conditions[] = 'end_year = ' . (int)$_GET['end_year'];
}
// Add other filters similarly

$query = 'SELECT * FROM data';
if ($conditions) {
    $query .= ' WHERE ' . implode(' AND ', $conditions);
}
$stmt = $pdo->query($query);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
?>
