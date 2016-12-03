# Schema Information

## users

|column name|data type|details|
|-----------|---------|-------|
|id|integer|not null, primary key|
|username|string|not null, indexed, unique|
|email|string|not null, indexed, unique|
|f_name|string|not null, indexed|
|l_name|string|not null, indexed|
|password_digest|string|not null|
|session_token|string|not null, indexed, unique|

## songs

|column name|data type|details|
|-----------|---------|-------|
|id|integer|not null, primary key|

## albums

|column name|data type|details|
|-----------|---------|-------|
|id|integer|not null, primary key|

## playlists

|column name|data type|details|
|-----------|---------|-------|
|id|integer|not null, primary key|

## follows

|column name|data type|details|
|-----------|---------|-------|
|id|integer|not null, primary key|
