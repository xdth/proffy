import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader title="Formateurs disponibles">
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Sujet</Text>
            <TextInput
              style={styles.input}
              placeholder="Quel sujet?"
              placeholderTextColor="#C1BCCC"
            />
            
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Jour de la semaine</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quel jour?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horaire</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quel horaire?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;