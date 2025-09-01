// app/(tabs)/explore.tsx
import React, { useContext, useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import Header from "../../../components/Header";
import PlaceCard from "../../../components/PlaceCard";
import { InterestsContext } from "../../../contexts/InterestsContext";
import { getRecommended } from "../../../lib/rec";

export default function ExploreScreen() {
  const { interests } = useContext(InterestsContext);

  const data = useMemo(() => getRecommended(interests, 20) ?? [], [interests]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Explore" />

      <View style={{ padding: 16, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
          Explore for you
        </Text>

        {data.length === 0 ? (
          <Text style={{ fontSize: 16, color: "#555" }}>
            No recommendations yet. Select interests first!
          </Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <PlaceCard place={item} />}
            contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}
